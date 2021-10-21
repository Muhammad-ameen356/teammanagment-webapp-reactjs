// import teamcss from "./Teamhome.module.css"
// import Firebaseconfig from '../Firebase/Firebaseconfig';
// import { getFirestore, doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import teamcss from "./Teamhome.module.css"
import { db } from "../Firebase/Firebaseconfig"
import { collection, doc, getDocs, query, where, onSnapshot } from "firebase/firestore";
import { auth, stateChange } from "../Firebase/Firebaseconfig"


const Createteam = () => {
    const [teamdata, setTeamData] = useState([]);
    //! First method (Get Data Once)
    // const docRef = collection(db, "team");

    // useEffect(() => {
    // const getData = async () => {
    // const data = await getDocs(docRef);
    // let abcd = data.docs.map((doc) => ({ ...doc.data() }));
    // setTeamData(data.docs.map((doc) => ({ ...doc.data() })));
    // console.log(data);
    // }
    // }, [])

    //! Second Method (Real Time Update)
    useEffect(() => {
        const getData = () => {
            stateChange(auth, async (user) => {
                const uid = user.uid;
                const q = query(collection(db, "team"), where("userId", "==", uid));
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const cities = [];
                    querySnapshot.forEach((doc) => {
                        cities.push(doc.data());
                    });
                    setTeamData(cities);
                });
            });
        }
        getData();
    }, [])

    return (
        <>
            {teamdata.map((data) => {
                return <div className={`${teamcss.secondContainer} container`}>
                    <fieldset className={`${teamcss.myteam} fw-normal text-start`}>
                        <div className={`${teamcss.myteamcontent}`}>
                            <p className={`${teamcss.teamname}`}>{data.teamname}</p>
                            <hr />
                            <i> <p className={`${teamcss.member}`}>Members: {data.teammember.map((e)=>{return <span style={{fontSize: 13, margin:0, fontWeight:700,}}>{e} &nbsp;</span>})}</p></i>
                            <div className={`d-flex justify-content-between`}>
                                <ul className={`${teamcss.teammember}`}>
                                </ul>
                                <div className={`text-center`}>
                                    <i data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ cursor: 'pointer' }} className="bi bi-pencil-square pe-2" />
                                    <i className="bi bi-gear-fill" style={{ cursor: 'pointer' }} />
                                </div>
                            </div>
                            <hr />
                            <p className={`${teamcss.teammember}`}><b>Category:</b> {data.teamcategory}</p>
                        </div>
                    </fieldset>
                </div>
            })}

        </>

    )
}

export default Createteam;
