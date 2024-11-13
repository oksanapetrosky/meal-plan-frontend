import axios from 'axios';

const getAllMeals = (setMyMeal) => {
    axios.get("https://meal-plan-app-618o.onrender.com")
    .then(({data}) => {console.log(data)
    setMyMeal(data)
    })
}

const addMeal = (title, setTitle, setMyMeal) => {
    axios.post("https://meal-plan-app-618o.onrender.com/saveMeals", { title })
    .then((data) => {
        console.log(data)
        setTitle("")
        getAllMeals(setMyMeal)
    })
}

const editMeal = (mealId, title, setTitle, setMyMeal, setEditing) => {
    axios.put("https://meal-plan-app-618o.onrender.com/editMeal", {_id: mealId, title })
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllMeals(setMyMeal)
    })
}

const deleteMeal = (_id, setMyMeal) => {
    axios.delete('https://meal-plan-app-618o.onrender.com/deleteMeal',  {_id})
    .then((data) => {
        console.log(data)
        getAllMeals(setMyMeal)
    })
}

export { getAllMeals, addMeal, editMeal, deleteMeal };