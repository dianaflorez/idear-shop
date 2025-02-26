interface CategoryProps {
    params: {
        categories: string[],
        searchParams?: string
    }
}

export default function Category(props: CategoryProps){
    
    const {categories} = props.params;
    // throw new Error('Error en la categoría');

    return(
        <div>
            <h1>Category dinamic: {categories} </h1>
        </div>
    )

}