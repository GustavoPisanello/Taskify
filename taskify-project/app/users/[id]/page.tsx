/*Here we have dynamic routing. Use the square brackets in the folder name and get the id from the params in the page function*/

const IdPage = ({params} : {params: {id: string}}) => {
    return (
        <>
        <div>
            Id: {params.id}
        </div>          
        </>
    );
};

export default IdPage