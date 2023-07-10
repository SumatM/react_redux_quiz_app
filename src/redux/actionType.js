

export const SAVE_FORM = "SAVE_FORM"

export const SAVE_QUESTION = "SAVE_QUESTION"


export const CORRECT_ANSWERS = "CORRECT_ANSWERS"


export const GET_USER = "GET_USER"


export function actionSaveForm(payload){
    return {type:SAVE_FORM,payload}
}


export function actionSaveQuestion(payload){
    return {type:SAVE_QUESTION,payload}
}


export function actionCorrectAnswer(){
    return {type:CORRECT_ANSWERS}
}

export function actionGetUser(payload){
    return {type:GET_USER,payload}
}