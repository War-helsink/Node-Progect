import state from "./store";



class dbFirebase {

    constructor(dbName) {
        //@ts-ignore
        this.db = firebase.firestore();
        //@ts-ignore
        this.dbName = dbName;
        this.getItems();
    }

    getItems() {
         //@ts-ignore
        this.db.collection(this.dbName).get().then((querySnapshot) => {
            let item = [];
            querySnapshot.forEach((doc) => {
                let obj = doc.data();
                obj["id"] = doc.id
                item.push(obj);
            });
             //@ts-ignore
            if (this.dbName == state.db_name.admin) {
                state.adminItems = item;
                state.allAdminItems = item;
            }
             //@ts-ignore
            else if (this.dbName == state.db_name.article) {
                state.articlesItems = item;
                state.allArticlesItems = item;
            }
        })
    }

    deleteItem(id) {
         //@ts-ignore
        this.db.collection(this.dbName).doc(id).delete().then(() => {
            this.getItems()
        })
    }

    updeteItem(id, newItem) {
         //@ts-ignore
        this.db.collection(this.dbName).doc(id).set(newItem).then(() => {
            this.getItems()
        })
    }


    createItem(obj) {
         //@ts-ignore
        this.db.collection(this.dbName).add(obj).then(() => {
            this.getItems();
        })

    }
   

}



export default dbFirebase;