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

// type FormState = [
  


// ]
// type FormPageState = keyof typeof parts

// type QuestionItem = {id:number, question: string, ans:string
// }
//   // {question: keyof questionList}
//  "What is you COVID-19 test result?": string,
//   "cough": string,
//   "runny nose": string,
//   "headache": string,
//   "sore throat": string,
//   "muscle aches": string,
//   "vomiting": string,
//   "diarrhea": string,
//   "abdominal pain": string,
//   "difficulty breathing":string ,
//   "chest pain":string ,
//   "loss of taste or smell":string,
//   "new confusion":string,
//   "body temperature":string,
//   "phlegm amount":string,
//   "phlegm out":string,
//   "phlegm color":string,
//   "feeling cold":string,
//   "fatigue":string,
//   imagePreview?: string,
//   imageFile?: File,
// }
// const parts = {
//   1: Part1,
//   2: Part2,
//   3: Part3,
//   4: Part4,
//   5: Part5,
// }


// function Part1(props: {
//   formData: FormState
//   updateFormData: (patch: Partial<FormState>) => void
//   formPage: FormPageState
//   updateFormPage: (page:FormPageState) => void
// }) {
//   const { formData, updateFormData, formPage, updateFormPage } = props
//   const [selected, setSelected] = useState<string>('null');
  
//   const optionQ1 = [
//     { id: 1, text: "positive test result" },
//     { id: 2, text: "negative test result" },
//     { id: 3, text: "I have not received the test result yet" },
//     { id: 4, text: "I did not take a test" },
//   ]
//   return (
//     <IonPage>
//       <IonContent>
//         <div style={{ margin: "1em" }}>
//           <IonProgressBar value={0}></IonProgressBar>
//           <IonHeader className="ion-text-center" >

//             <h3>你的2019新冠病毒測試結果</h3>
//             {/* <h3>What is you COVID-19 test result? </h3> */}

//           </IonHeader>

//           <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} >
//             <IonGrid>
//               <IonList>
//                 <IonRadioGroup value={formData["What is you COVID-19 test result?"]} onIonChange={e => {
//                   updateFormData({
//                     "What is you COVID-19 test result?": e.detail.value,
//                   });
//                   setSelected(e.detail.value);
//                 }}>
//                   <IonItem>
//                     <IonRadio slot="start" color="dark" value="positive test result"></IonRadio>
//                     <IonLabel>
//                       陽性
//                     </IonLabel>
//                     {/* <IonLabel>
//                       positive test result
//                     </IonLabel> */}

//                   </IonItem>
//                   <IonItem>
//                     <IonRadio slot="start" color="dark" value="negative test result"></IonRadio>
//                     <IonLabel>
//                       陰性
//                     </IonLabel>
//                     {/* <IonLabel>
//                       negative test result
//                     </IonLabel> */}

//                   </IonItem>
//                   <IonItem>
//                     <IonRadio slot="start" color="dark" value="I have not received the test result yet"></IonRadio>
//                     <IonLabel>
//                      等待檢測結果
//                     </IonLabel>
//                     {/* <IonLabel>
//                       I have not received the test result yet
//                     </IonLabel> */}

//                   </IonItem>
//                   <IonItem>
//                     <IonRadio slot="start" color="dark" value="I did not take a test"></IonRadio>
//                     <IonLabel>
//                       沒有進行檢測
//                     </IonLabel>
                    
//                     {/* <IonLabel>
//                       I did not take a test
//                     </IonLabel> */}

//                   </IonItem>

//                 </IonRadioGroup>

//               </IonList>
//             </IonGrid>

//           </div>
//         </div >
//       </IonContent>

//       <IonFooter>
//         <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

//           <IonButton color="secondary" onClick={() => updateFormPage(2)}>Next</IonButton>

//         </div>

//       </IonFooter> 
//     </IonPage>

//   )
// }



const Details = () => {
//   const [formPage, setFormPage] = useState<FormPageState> (1)
 
  
//   const [formData, setFormData] = useState<FormState>({
//     "What is you COVID-19 test result?": '',
//     "cough": '0',
//     "runny nose": '0',
//     "headache": '0',
//     "sore throat": '0',
//     "muscle aches": '0',
//     "vomiting": '0',
//     "diarrhea": '0',
//     "abdominal pain": '0',
//     "difficulty breathing":'0' ,
//   "chest pain":'0' ,
//   "loss of taste or smell":'0',
//   "new confusion":'0',
//   "body temperature":'35.8-37.2',
//   "phlegm amount":'no phlegm',
//   "phlegm out":'no phlegm',
//   "phlegm color":'no phlegm',
//   "feeling cold":'no',
//   "fatigue":'no',
//   // imagePreview?: '',
//   // imageFile?:'',
//   })

//   const Part = parts[formPage]
//   function updateFormData(patch: Partial<FormState>) {
//     setFormData(state => ({ ...state, ...patch }))
//   }
//   function updateFormPage(page:<FormPageState>){
//     setFormPage(parts =>(part))
//   }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Survey</IonTitle>
          {/* <p>{JSON.stringify(formData, null, 2)}</p> */}
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* <Part formData={formData} updateFormData={updateFormData} formPage={formPage} updateFormPage={updateFormPage}/> */}
        {/* <p>{JSON.stringify(formData, null, 2)}</p> */}
      </IonContent>
    </IonPage>
  )
}

export default Details
