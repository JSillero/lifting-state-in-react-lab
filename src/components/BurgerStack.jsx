// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    return (props.stack.slice(0).reverse().map((ingredient, index) => {
        return (<li style={{ background: ingredient.color }}  >
            {ingredient.name}
            < button
                onClick={() => props.removeIngredient(index)
                }> Remove</button >
        </li >)
    }));
};

export default BurgerStack;
