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
  IonFooter,
  IonGrid,
  IonRadioGroup,
  IonList,
  IonRadio,
  IonProgressBar,
  IonCol,
} from '@ionic/react'
//   import './Home.css'
import { useState } from 'react'
import { selectImage } from '@beenotung/tslib/file'
import { compressMobilePhoto, dataURItoBlob } from '@beenotung/tslib/image'
import React from 'react'

type FormState = {
  page: keyof typeof parts
  covid19_test: string,
  "cough": string,
  "runny nose": string,
  "headache": string,
  "sore throat": string,
  "muscle aches": string,
  "vomiting": string,
  "diarrhea": string,
  "abdominal pain": string,
  imagePreview?: string,
  imageFile?: File,
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
  const [selected, setSelected] = useState<string>('null');

  const optionQ1 = [
    { id: 1, text: "positive test result" },
    { id: 2, text: "negative test result" },
    { id: 3, text: "I have not received the test result yet" },
    { id: 4, text: "I did not take a test" },
  ]
  return (
    <IonPage>
      <IonContent>
        <div style={{ margin: "1em" }}>
          <IonProgressBar value={0}></IonProgressBar>
          <IonHeader className="ion-text-center" >

            <h3>你確診了2019新冠病毒嗎</h3>
            <h3>Are you tested positive COVID-19? </h3>

          </IonHeader>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} >
            <IonGrid>
              <IonList>
                <IonRadioGroup value={formData.covid19_test} onIonChange={e => {
                  updateFormData({
                    covid19_test: e.detail.value,
                  });
                  setSelected(e.detail.value);
                }}>
                  <IonItem>
                    <IonRadio slot="start" color="dark" value="positive"></IonRadio>
                    <IonLabel>
                      positive test result
                    </IonLabel>

                  </IonItem>
                  <IonItem>
                    <IonRadio slot="start" color="dark" value="negative"></IonRadio>
                    <IonLabel>
                      negative test result
                    </IonLabel>

                  </IonItem>
                  <IonItem>
                    <IonRadio slot="start" color="dark" value="waiting"></IonRadio>
                    <IonLabel>
                      I have not received the test result yet
                    </IonLabel>

                  </IonItem>
                  <IonItem>
                    <IonRadio slot="start" color="dark" value="take no test"></IonRadio>
                    <IonLabel>
                      I did not take a test
                    </IonLabel>

                  </IonItem>

                </IonRadioGroup>

              </IonList>
            </IonGrid>

          </div>
        </div >
      </IonContent>

      <IonFooter>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

          <IonButton onClick={() => updateFormData({ page: 2 })}>Next</IonButton>

        </div>

      </IonFooter>
    </IonPage>

  )
}



function Part2(props: {
  formData: FormState
  updateFormData: (patch: Partial<FormState>) => void
}) {
  const { formData, updateFormData } = props
  type chosenState = {
    id: number;
    symptom: string;
    level: string;
  }


  const [chosen, setChosen] = useState<chosenState[]>([
    { id: 1, symptom: "cough", level: "0" },
    { id: 2, symptom: "runny nose", level: "0" },
    { id: 3, symptom: "headache", level: "0" },
    { id: 4, symptom: "sore throat", level: "0" },
    { id: 5, symptom: "muscle aches", level: "0" },
    { id: 6, symptom: "vomiting", level: "0" },
    { id: 7, symptom: "diarrhea", level: "0" },
    { id: 8, symptom: "abdominal pain", level: "0" },
  ])
  const symptoms = [
    { id: 1, symptom: "cough", level: "0" },
    { id: 2, symptom: "runny nose", level: "0" },
    { id: 3, symptom: "headache", level: "0" },
    { id: 4, symptom: "sore throat", level: "0" },
    { id: 5, symptom: "muscle aches", level: "0" },
    { id: 6, symptom: "vomiting", level: "0" },
    { id: 7, symptom: "diarrhea", level: "0" },
    { id: 8, symptom: "abdominal pain", level: "0" },
  ]


  return (
    <IonPage>
      <IonContent>
        <div style={{ margin: "1em" }}>
          <IonProgressBar value={0.25}></IonProgressBar>
          <IonHeader className="ion-text-center">

            <h3>您有什麼症狀？</h3>
            <h3>What are the symptoms you have? </h3>
            <h5>程度0分是沒有症狀，4分為最嚴重</h5>
          </IonHeader>
          <IonGrid>
            <IonCol>
              <IonList>
                {symptoms.map((symptom) =>
                  <IonItem key={symptom.id}>
                    <IonLabel>{symptom.symptom}</IonLabel>
                    <IonSelect value>={symptom.level} onIonChange={e =>{
                        // setChosen({
                        //   id:e.detail.key,
                        //   symptom:[symptom.symptom],
                        //   level:e.detail.value
                        // );
                        updateFormData({
                          [symptom.symptom]: e.detail.value,
                        });
                        console.log(e.detail.keyof);
                        console.log(e.detail.value);
                        console.log([symptom.symptom]);
                        console.log(chosen);
                  }
                   }>
                      <IonSelectOption value="0"> 0 沒有</IonSelectOption>
                      <IonSelectOption value="1">1 輕微</IonSelectOption>
                      <IonSelectOption value="2">2 中等</IonSelectOption>
                      <IonSelectOption value="3">3 嚴重</IonSelectOption>
                      <IonSelectOption value="4">4 非常嚴重</IonSelectOption>
                  </IonSelect>  
                  </IonItem>
                )}
              </IonList>
            </IonCol>
          </IonGrid>
        </div>

      </IonContent>

      <IonFooter>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

          <IonButton onClick={() => updateFormData({ page: 1 })}>Prev</IonButton>
          <IonButton onClick={() => updateFormData({ page: 3 })}>Next</IonButton>

        </div>

      </IonFooter>
    </IonPage >

  )
}


// function Part2(props: {
//   formData: FormState
//   updateFormData: (patch: Partial<FormState>) => void
// }) {
//   const { formData, updateFormData } = props
//   return (
//     <>
//       <IonItem>
//         <IonLabel>Question 2</IonLabel>
//         <IonSelect
//           value={formData.question2}
//           onIonChange={e =>
//             updateFormData({
//               question2: e.detail.value,
//             })
//           }
//         >
//           <IonSelectOption value="option 3">option 3</IonSelectOption>
//           <IonSelectOption value="option 4">option 4</IonSelectOption>
//         </IonSelect>
//       </IonItem>
//       <IonButton onClick={() => updateFormData({ page: 1 })}>Prev</IonButton>
//       <IonButton onClick={() => updateFormData({ page: 3 })}>Next</IonButton>
//     </>
//   )
// }
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

const Home = () => {
  const [formData, setFormData] = useState<FormState>({
    page: 1,
    covid19_test: '',
    "cough": '',
    "runny nose": '',
    "headache": '',
    "sore throat": '',
    "muscle aches": '',
    "vomiting": '',
    "diarrhea": '',
    "abdominal pain": '',
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
          <p>{JSON.stringify(formData, null, 2)}</p>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Part formData={formData} updateFormData={updateFormData} />
        {/* <p>{JSON.stringify(formData, null, 2)}</p> */}
      </IonContent>
    </IonPage>
  )
}

export default Home
