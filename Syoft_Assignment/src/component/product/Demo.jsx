import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const Demo = () => {
    const [change, setChange] = useState([]);

    const api = () => {
        axios.get(`https://fakestoreapi.com/products`)
            .then((res) => {
                setChange(res.data)
            })
    }
    useEffect(() => {
        api()
    }, [])

    return (
        <div className="main" style={{
            width: "100%",
            border: "1px solid blue",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(4, 1fr)",
            gridGap: "1%",

            //   backgroundColor:"blue"
        }}>

            {change.map((el) => {

                return (

                    <div key={el.id} id="agamespage"
                        className="container" style={{
                            // backgroundColor: "#121212",

                            // border: "1px solid yellow",
                            textAlign: "left",
                            textDecoration: "none",
                            fontFamily: "Brutal, sans-serif"
                        }}>
                        <Link to={`/indi/${el.id}`} key={el.id} >
                            <div className="aimg" style={{
                                width: "100%",
                                height: "72%",
                                // border: "1px solid red"
                            }}>

                                <img src={el.image} alt="err" width="80%" height="100%" />

                            </div>
                        </Link>

                        <div className="atitle">
                            <p>{el.title}</p>
                            <div style={{
                                // border: "1px solid red",
                                height: "15%",
                                display: "flex"
                            }}>

                                <p className="price">₹ {el.price}</p>
                            </div>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}