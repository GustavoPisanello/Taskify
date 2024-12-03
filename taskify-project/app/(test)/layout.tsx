/*Here we have an layout page. It will be in all the pages in the paren'ts folder. Just simple like putting the "layout.tsx" name*/
/* We're also getting the "children" object and destructuring it. The children object is a React type */

const TestLayout = ({children}: {children: React.ReactNode;}) => {
    return (
        <>
            <div className="h-full">
                <div>
                    This is a NavBar
                </div>
                {children}
            </div>
        </>
    );
};

export default TestLayout