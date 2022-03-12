import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonSegment,
    IonSegmentButton,
    IonToolbar,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton,
  } from '@ionic/react'
//   import './Home.css'
  import { useState } from 'react'
  import { selectImage } from '@beenotung/tslib/file'
  import { compressMobilePhoto, dataURItoBlob } from '@beenotung/tslib/image'
import React from 'react'
  
  type FormState = {
    page: keyof typeof parts
    question1: string
    question2: string
    imagePreview?: string
    imageFile?: File
  }
  const parts = {
    1: Part1,
    2: Part2,
    3: Part3,
  }
  
  function Part1(props: {
    formData: FormState
    updateFormData: (patch: Partial<FormState>) => void
  }) {
    const { formData, updateFormData } = props
    return (
      <>
        <IonItem>
          <IonLabel>Question 1</IonLabel>
          <IonSelect
            value={formData.question1}
            onIonChange={e =>
              updateFormData({
                question1: e.detail.value,
              })
            }
          >
            <IonSelectOption value="option 1">option 1</IonSelectOption>
            <IonSelectOption value="option 2">option 2</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonButton onClick={() => updateFormData({ page: 2 })}>Next</IonButton>
      </>
    )
  }
  function Part2(props: {
    formData: FormState
    updateFormData: (patch: Partial<FormState>) => void
  }) {
    const { formData, updateFormData } = props
    return (
      <>
        <IonItem>
          <IonLabel>Question 2</IonLabel>
          <IonSelect
            value={formData.question2}
            onIonChange={e =>
              updateFormData({
                question2: e.detail.value,
              })
            }
          >
            <IonSelectOption value="option 3">option 3</IonSelectOption>
            <IonSelectOption value="option 4">option 4</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonButton onClick={() => updateFormData({ page: 1 })}>Prev</IonButton>
        <IonButton onClick={() => updateFormData({ page: 3 })}>Next</IonButton>
      </>
    )
  }
  function Part3(props: {
    formData: FormState
    updateFormData: (patch: Partial<FormState>) => void
  }) {
    const { formData, updateFormData } = props
    // const formData = props.formData
    // const updateFormData = props.updateFormData
    async function pickImage() {
      let [file] = await selectImage({ accept: 'image/*' })
      if (!file) {
        return
      }
      let dataUrl = await compressMobilePhoto({ image: file })
      let blob = dataURItoBlob(dataUrl)
      file = new File([blob], file.name, {
        lastModified: file.lastModified,
        type: blob.type,
      })
      updateFormData({ imagePreview: dataUrl, imageFile: file })
    }
    return (
      <>
        <IonItem>
          <IonLabel>Photo</IonLabel>
          <img src={formData.imagePreview} />
          {/* <input type="file" accept="image/*;capture=camera"></input> */}
          <IonButton onClick={pickImage}>pic</IonButton>
        </IonItem>
        <IonButton onClick={() => updateFormData({ page: 2 })}>Prev</IonButton>
        <IonButton>Submit</IonButton>
      </>
    )
  }
  
  const Tab4 = () => {
    const [formData, setFormData] = useState<FormState>({
      page: 1,
      question1: '',
      question2: '',
    })
    const Part = parts[formData.page]
    function updateFormData(patch: Partial<FormState>) {
      setFormData(state => ({ ...state, ...patch }))
    }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Survey</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Part formData={formData} updateFormData={updateFormData} />
          <p>{JSON.stringify(formData, null, 2)}</p>
        </IonContent>
      </IonPage>
    )
  }
  
  export default Tab4
  