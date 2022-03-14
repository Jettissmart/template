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
  "What is you COVID-19 test result?": string,
  "cough": string,
  "runny nose": string,
  "headache": string,
  "sore throat": string,
  "muscle aches": string,
  "vomiting": string,
  "diarrhea": string,
  "abdominal pain": string,
  "difficulty breathing":string ,
  "chest pain":string ,
  "loss of taste or smell":string,
  "new confusion":string,
  "body temperature":string,
  "phlegm amount":string,
  "phlegm out":string,
  "phlegm color":string,
  "feeling cold":string,
  "fatigue":string,
  imagePreview?: string,
  imageFile?: File,
}
const parts = {
  1: Part1,
  2: Part2,
  3: Part3,
  4: Part4,
  5: Part5,
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

            <h3>你的2019新冠病毒測試結果</h3>
            <h3>What is you COVID-19 test result? </h3>

          </IonHeader>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} >
            <IonGrid>
              <IonList>
                <IonRadioGroup value={formData["What is you COVID-19 test result?"]} onIonChange={e => {
                  updateFormData({
                    "What is you COVID-19 test result?": e.detail.value,
                  });
                  setSelected(e.detail.value);
                }}>
                  <IonItem>
                    <IonRadio slot="start" color="dark" value="positive test result"></IonRadio>
                    <IonLabel>
                      positive test result
                    </IonLabel>

                  </IonItem>
                  <IonItem>
                    <IonRadio slot="start" color="dark" value="negative test result"></IonRadio>
                    <IonLabel>
                      negative test result
                    </IonLabel>

                  </IonItem>
                  <IonItem>
                    <IonRadio slot="start" color="dark" value="I have not received the test result yet"></IonRadio>
                    <IonLabel>
                      I have not received the test result yet
                    </IonLabel>

                  </IonItem>
                  <IonItem>
                    <IonRadio slot="start" color="dark" value="I did not take a test"></IonRadio>
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
                {chosen.map((symptom) =>
                  <IonItem key={symptom.id}>
                    <IonLabel>{symptom.symptom}</IonLabel>
                    <IonSelect value={symptom.level} onIonChange={e =>{
                        const newChoose = chosen.slice(0);
                        const updateChoose =newChoose.filter((sym:chosenState)=>sym.symptom===symptom.symptom);
                         updateChoose[0].level= e.detail.value
                         setChosen(newChoose);
                        // setChosen({
                        //   id:e.detail.key,
                        //   symptom:[symptom.symptom],
                        //   level:e.detail.value
                        // );
                        updateFormData({
                          [symptom.symptom]: e.detail.value,
                        });
                        console.log(e.detail);
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


function Part3(props: {
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
    { id: 9, symptom: "difficulty breathing", level:"0" },
    { id: 10, symptom: "chest pain", level:"0" },
    { id: 11, symptom: "loss of taste or smell", level:"0" },
    { id: 12, symptom: "new confusion", level:"0" },
  ])
//   const symptoms=[
//     { id: 9, symptom: "difficulty breathing", level:"0" },
//     { id: 10, symptom: "chest pain", level:"0" },
//     { id: 11, symptom: "loss of taste or smell", level:"0" },
//     { id: 12, symptom: "new confusion", level:"0" },
// ]
  return (
    <IonPage>
      <IonContent>
      <div style={{ margin: "1em" }}>
                        <IonProgressBar value={0.25}></IonProgressBar>
                        <IonHeader className="ion-text-center">

                            <h3>您有什麼症狀？(其他症狀）</h3>
                            <h3>What are the symptoms you have? </h3>

                        </IonHeader>
                        <IonGrid>
      <IonCol>
            <IonList>
                    {chosen.map((symptom)=>
                    <IonItem key={symptom.id}>
                    <IonLabel>{symptom.symptom}</IonLabel>
                    <IonSelect value={symptom.level} onIonChange={e =>{
                    const newChoose = chosen.slice(0);
                    const updateChoose =newChoose.filter((sym:chosenState)=>sym.symptom===symptom.symptom);
                     updateChoose[0].level= e.detail.value
                     setChosen(newChoose);
            updateFormData({
              [symptom.symptom]: e.detail.value,
            })
                    }}>
                    <IonSelectOption value="0">0 沒有</IonSelectOption>
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

          <IonButton onClick={() => updateFormData({ page: 2 })}>Prev</IonButton>
          <IonButton onClick={() => updateFormData({ page: 4 })}>Next</IonButton>

        </div>

      </IonFooter>
    </IonPage >

  )
}

function Part4(props: {
  formData: FormState
  updateFormData: (patch: Partial<FormState>) => void
}) {
  const { formData, updateFormData } = props
  type chosenState = {
    id: number;
    symptom: string;
    level: string;
  }
  const [temp, setTemp] = useState<string>('35.8-37.2');
  const [phlegmAmount, setPhlegmAmount] = useState<string>('no');
  const [out, setPhlegmOut] = useState<string>('no');
  const [phlegmColor, setPhlegmColor] = useState<string>('no');
  const [cold, setCold] = useState<string>('0');
  const [fatigue, setFatigue] = useState<string>('0');

  return (
    <IonPage>
      <IonContent>
      <div style={{ margin: "1em" }}>
            <IonProgressBar value={0.5}></IonProgressBar>
            <IonHeader className="ion-text-center">

                <h3>詳細身體狀況？</h3>
                <h3>More information about your health </h3>

            </IonHeader>
            <IonGrid>
                <IonCol>
                    <IonList>
                        {/* {symptoms.map((id,symptom,level)=>
                    <IonItem key={id}>
                    <IonCheckbox></IonCheckbox><IonLabel>{symptom}</IonLabel>
                    </IonItem>
                    )} */}
                        <IonItem key={0}>
                            <IonLabel>體溫</IonLabel>
                            <IonSelect value={temp} onIonChange={e => {
                  updateFormData({
                    "body temperature": e.detail.value,
                  });
                  setTemp(e.detail.value);
                }} >
                                <IonSelectOption value="35.8-37.2">35.8-37.2&#8451; 沒有發燒</IonSelectOption>
                                <IonSelectOption value="37.3-38">37.3-38&#8451; 低燒</IonSelectOption>
                                <IonSelectOption value="38.1-39">38.1-39&#8451; 中燒</IonSelectOption>
                                <IonSelectOption value="39.1-41">39.1-41&#8451;或以上 高燒</IonSelectOption>
                                <IonSelectOption value="41.1 or higher">41.1&#8451;或以上 超高燒</IonSelectOption>
                            </IonSelect>
                        </IonItem>


                        <IonItem key={1}>
                            <IonLabel>痰多少</IonLabel>
                            <IonSelect value={phlegmAmount} onIonChange={e => {
                  updateFormData({
                    "phlegm amount": e.detail.value,
                  });
                  setPhlegmAmount(e.detail.value);
                }}>
                                <IonSelectOption value="no phlegm">沒有痰</IonSelectOption>
                                <IonSelectOption value="little clear phlegm">稀痰少</IonSelectOption>
                                <IonSelectOption value="lot of clear phlegm">稀痰多</IonSelectOption>
                                <IonSelectOption value="little thick phlegm">膿痰少</IonSelectOption>
                                <IonSelectOption value="lot of thick phlegm">膿痰多</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem key={2}>
                            <IonLabel>可否咳出痰</IonLabel>
                            <IonSelect value={out} onIonChange={e => {
                  updateFormData({
                    "phlegm out": e.detail.value,
                  });
                  setPhlegmOut(e.detail.value);
                }}>
                                <IonSelectOption value="no phlegm">沒有痰</IonSelectOption>
                                <IonSelectOption value="can spit">可咳出來</IonSelectOption>
                                <IonSelectOption value="cannot cough out">咳不出來</IonSelectOption>
                            </IonSelect>
                        </IonItem>


                        <IonItem key={3}>
                            <IonLabel>痰顏色</IonLabel>
                            <IonSelect value={phlegmColor} onIonChange={e => {
                  updateFormData({
                    "phlegm color": e.detail.value,
                  });
                  setPhlegmColor(e.detail.value);
                }}>
                                <IonSelectOption value="no phlegm">沒有痰</IonSelectOption>
                                <IonSelectOption value="white">白色</IonSelectOption>
                                <IonSelectOption value="yellow">黃色</IonSelectOption>
                                <IonSelectOption value="green">綠色</IonSelectOption>
                                <IonSelectOption value="phlegm with blood">痰中帶血</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem key={4}>
                            <IonLabel>發冷</IonLabel>
                            <IonSelect value={cold} onIonChange={e => {
                  updateFormData({
                    "feeling cold": e.detail.value,
                  });
                  setCold(e.detail.value);
                }}>
                                <IonSelectOption value="no">沒有</IonSelectOption>
                                <IonSelectOption value="yes">有</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem key={5}>
                            <IonLabel>疲累</IonLabel>
                            <IonSelect value={fatigue} onIonChange={e => {
                  updateFormData({
                    "fatigue": e.detail.value,
                  });
                  setFatigue(e.detail.value);
                }} >
                                <IonSelectOption value="no">沒有</IonSelectOption>
                                <IonSelectOption value="yes">有</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                    </IonList>
                </IonCol>
            </IonGrid>
        </div>

      </IonContent>

      <IonFooter>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

          <IonButton onClick={() => updateFormData({ page: 3 })}>Prev</IonButton>
          <IonButton onClick={() => updateFormData({ page: 5})}>Next</IonButton>

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
function Part5(props: {
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
      <IonButton onClick={() => updateFormData({ page: 4 })}>Prev</IonButton>
      <IonButton>Submit</IonButton>
    </>
  )
}

const Home = () => {
  const [formData, setFormData] = useState<FormState>({
    page: 1,
    "What is you COVID-19 test result?": '',
    "cough": '0',
    "runny nose": '0',
    "headache": '0',
    "sore throat": '0',
    "muscle aches": '0',
    "vomiting": '0',
    "diarrhea": '0',
    "abdominal pain": '0',
    "difficulty breathing":'0' ,
  "chest pain":'0' ,
  "loss of taste or smell":'0',
  "new confusion":'0',
  "body temperature":'35.8-37.2',
  "phlegm amount":'no phlegm',
  "phlegm out":'no phlegm',
  "phlegm color":'no phlegm',
  "feeling cold":'no',
  "fatigue":'no',
  // imagePreview?: '',
  // imageFile?:'',
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
