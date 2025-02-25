interface CategoryProps {
    params: {
        categories: string[];
    }
}

export default function Category(props: CategoryProps){
    
    const {categories} = props.params;
    console.log(categories)
    return(
        <div>
            <h1>Category dinamic: {categories} </h1>
        </div>
    )

}