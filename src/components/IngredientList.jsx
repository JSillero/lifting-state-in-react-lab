// src/components/IngredientList.jsx
const IngredientList = (props) => {
    return (

        props.ingredients.map(ingredient => {
            return (<li style={{ background: ingredient.color }}  >
                {ingredient.name}
                < button
                    onClick={() => props.setburgStack({ name: ingredient.name, color: ingredient.color })
                    }> Add</button >
            </li >)
        })

    )
}

export default IngredientList;
