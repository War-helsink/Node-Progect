import { createStore } from "@stencil/store";
import dbFirebase from "./db-firebase";
import maxFunction from "./search-sort-filter";

const { state } = createStore({
     //@ts-ignore
    "storage": firebase.storage(),

    "db_name": {
        "admin": "admin",
        "article": "article",
    },
     //@ts-ignore
    "adminDb": new dbFirebase("admin"),
     //@ts-ignore
    "articleDb": new dbFirebase("article"),
    "adminItems": [],
    "articlesItems": [],
    "allAdminItems": [],
    "allArticlesItems": [],

    "newFunctionAdmin": new maxFunction({
        "sort": {
            "argument": "name",
            "fromWhere": true,
        },
        "price": {
            "max": 2000,
            "min": 0,
        },
        "filter": {
            "color": [],
            "size": [],
            "weight": [],
        },
        "search": "",
    }, ["adminItems", "allAdminItems"]),

    "newFunctionArticles": new maxFunction({
        "sort": {
            "argument": "name",
            "fromWhere": true,
        },
        "price": {
            "max": 2000,
            "min": 0,
        },
        "filter": {
            "color": [],
            "size": [],
            "weight": [],
        },
        "search": "",
    },[ "articlesItems","allArticlesItems"], true),


});


export default state;