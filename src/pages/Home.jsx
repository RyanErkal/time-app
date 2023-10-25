import Clock from "../components/Clock";

export default function Home() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <Clock />
            <div className="italic text-xl">&ldquo;The time will pass anyways.&ldquo;</div>
        </div>
    );
}
