import Max from "../../layout/Contaniner"
import Title from "../Card/Title"
import ListOfLInkes from "./ListOfLInkes"
import Rights from "./Rights"
import SubBox from "./SubBox"
const Linkes = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/"
    },
    {
        title: "Blog",
        path: "/"
    },
    {
        title: "Archived",
        path: "/"
    },
    {
        title: "Author",
        path: "/"
    },
    {
        title: "Contact",
        path: "/"
    },
]
const Linkes_ = [
    {
        title: "Category",
        path: "/"
    },
    {
        title: "Lifestyle",
        path: "/"
    },
    {
        title: "Travel",
        path: "/"
    },
    {
        title: "Business",
        path: "/"
    },
    {
        title: "Economy",
        path: "/"
    },
    {
        title: "Sports",
        path: "/"
    },
]
function Footer() {
    return (
        <footer className="pt-16 bg-zinc-100 px-2 sm:px-0 ">
            <Max>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    <div>
                        <Title>
                            About
                        </Title>
                        <p className="max-w-full my-6 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <p className="flex gap-2 items-center">
                            <Title className={"my-0"}>
                                Email
                            </Title>
                            : info@jstemplate.net
                        </p>
                        <p className="flex gap-2 items-center">
                            <Title className={"my-0"}>
                                Phone
                            </Title>
                            : 880 123 456 789
                        </p>
                    </div>
                    <div className="flex gap-16">
                        <ListOfLInkes title={"Quick Link"} Linkes={Linkes} />
                        <ListOfLInkes title={"Quick Link"} Linkes={Linkes_} />
                    </div>
                    <div>
                        <SubBox />
                    </div>
                    {/* end */}
                </div>
                <Rights/>
            </Max>
        </footer>
    )
}

export default Footer