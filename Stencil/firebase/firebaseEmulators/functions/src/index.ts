import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";

admin.initializeApp({
    databaseURL: "https://learn-firebase-45a6c.firebaseio.com",
})

export const justDoIt = functions
    .firestore
    .document("todos/{todo}")
    .onCreate(async (snap, context) => {
        console.log("--------------------------------------------------------------");
        const data = snap.data();
        // console.log('data:', data);
        // console.log('context.params.todo:', context.params.todo);

        if(data.isDone){
            console.log(`${context.params.todo} is done`)
        }
        else{
            await admin.firestore().collection("justDoIt").doc(context.params.todo).set({...data})
        }

    });

