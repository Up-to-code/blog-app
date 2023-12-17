/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Title from "../Card/Title"
import { Link } from "react-router-dom"
function ListOfLInkes({ title, Linkes }) {
    return (
        <div>
            <Title>
                {title}
            </Title>
            <ul>


                {
                    Linkes.map((e) => {

                        return (<li key={Math.floor(Math.random() * 10)}>
                            <Link to={e.path} className="text-gray-800 ">
                                {e.title}
                            </Link>
                        </li>
                        )
                    })
                }


            </ul>
        </div>
    )
}

export default ListOfLInkes