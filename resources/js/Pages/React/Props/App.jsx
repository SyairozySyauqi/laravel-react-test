import Student from "./Student";

function App() {
    return (
        <>
            <Student name="Spongebob" age="{30}" isStudent={true} />
            <Student name="Patric" age={31} isStudent={false} />
            <Student name="Squidward" age={41} isStudent={false} />
            <Student />
        </>
    );
}

export default App;
