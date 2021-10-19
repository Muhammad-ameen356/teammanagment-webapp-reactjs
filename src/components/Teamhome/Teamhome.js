import React from 'react'
import teamcss from "./Teamhome.module.css"
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Teamhome = () => {
    return (
        <div>
            <h1>Ameen</h1>
            <div className={`container`}>
                <div className={`row`}>
                    <fieldset className={`${teamcss.mainborder}`}>
                        <legend className={`${teamcss.mainborder}`}>Teams</legend>
                        <section className={`logout d-flex justify-content-between`}>
                            <div className={`dropdown`}>
                                <button className={`${teamcss.borderRemove}`} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <p className={`${teamcss.imgCircle}`} id="profilefirstword" />
                                </button>
                                <div className={`dropdown-menu`} aria-labelledby="dropdownMenuButton">
                                    <b style={{ fontSize: '20px' }}>Sign in as: </b>
                                    <p className={`info`} id="profilename" />
                                    <p className={`info`} id="profileemail" />
                                    <p className={`${teamcss.info} text-muted`} id="username" />
                                    <hr />
                                    <button className={`${teamcss.dropdownItem} ${teamcss.logoutBtn}`} type="button" onClick="logout()">Logout</button>
                                </div>
                            </div>
                            {/* <button onClick="logout()" class="btn btn-danger bi-text-right">LogOut</button> */}
                        </section>
                        <section className={`text-center my-2`}>
                            <h4>Teams you own</h4>
                        </section>
                        <div className={`${teamcss.secondContainer} container`} id="createElement">
                        </div>
                        <div className={`d-flex justify-content-end`}>
                            <button type="button" onClick="showinputmodalbox()" className={`btn btn-dark text-white ${teamcss.shadowRemove} ${teamcss.borderradiusRemove}`} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <AddIcon />
                            </button>
                            &nbsp;&nbsp;&nbsp;
                            <button type="button" onDoubleClick="deleteall()" className={`btn btn-dark text-white ${teamcss.shadowRemove} ${teamcss.borderradiusRemove}`} title="DoubleTap to delete">
                                <DeleteForeverIcon/>
                            </button>
                        </div>
                        <hr />
                        <section className={`text-center`}>
                            <h4>Teams you're part of</h4>
                        </section>
                        <div className={`${teamcss.secondContainer} container`} id="partteamElement">
                        </div>
                    </fieldset>
                </div>
                {/* Button trigger modal */}
                {/* <button type="button" class="btn btn-dark text-white shadow-remove" onClick="createteam()" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Add
    </button> */}
                {/* Modal */}
                <div className={`modal fade`} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className={`modal-dialog modal-dialog-centered`}>
                        <div className={`modal-content borderradius-remove`}>
                            <div className={`modal-header`}>
                                <h5 className={`modal-title`} id="staticBackdropLabel">Modal title</h5>
                                {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                            </div>
                            <div className={`modal-body`}>
                                <form id="addingmemberform" className={`container`}>
                                    <div className={`form-outline`}>
                                        <label htmlFor="teamnameinput" className={`form-label`}>Team Name</label>
                                        <input type="email" className={`form-control ${teamcss.shadowRemove} ${teamcss.borderradiusRemove}`} placeholder="Team Name" id="teamnameinput" aria-describedby="emailHelp" />
                                    </div>
                                    <input type="hidden" id="hiddeninput" />
                                    <br />
                                    <div className={`form-outline`}>
                                        <label htmlFor="teamcatogeryinput" className={`form-label`}>Category</label>
                                        <select id="teamcatogeryinput" className={`form-select ${teamcss.shadowRemove} ${teamcss.borderradiusRemove}`} aria-label="Default select example">
                                            <option value="Not selected" selected>Category</option>
                                            <option value="Maintainence">Maintainence</option>
                                            <option value="Development">Development</option>
                                            <option value="Project Manager">Project Manager</option>
                                        </select>
                                        {/* <input type="email" class="form-control shadow-remove" placeholder="Category"
                       aria-describedby="emailHelp"> */}
                                    </div>
                                    <br />
                                    <div className={`form-outline`}>
                                        <label htmlFor="memberemailinput" className={`form-label`}>Member (type email)</label>
                                        <input type="email" className={`form-control ${teamcss.shadowRemove} ${teamcss.borderradiusRemove}`} id="memberemailinput" aria-describedby="emailHelp" />
                                        <p className={`text-muted`}>
                                            Seperated By comas (<b style={{ fontSize: '22px' }}>,</b>)
                                        </p>
                                        {/* <button type="button" onClick="addmember()" class="btn btn-danger rounded-0 mt-3">
                          Add Member
                      </button> */}
                                    </div>
                                </form>
                            </div>
                            <div className={`modal-footer d-flex justify-content-center`}>
                                <button type="button" id="createteamid" onClick="createteamdatastore(); createteam();" className={`btn btn-info text-white ${teamcss.shadowRemove} ${teamcss.borderradiusRemove}`} data-bs-dismiss="modal">
                                    Create
                                </button>
                                <button type="button" id="editteambutton" onClick="saveeditteam()" style={{ display: 'none' }} className={`btn btn-info text-white ${teamcss.shadowRemove} ${teamcss.borderradiusRemove}`} data-bs-dismiss="modal">
                                    Edit
                                </button>
                                <button type="button" id="cancelbutton" className={`btn btn-warning text-white ${teamcss.shadowRemove} ${teamcss.borderradiusRemove}`} data-bs-dismiss="modal">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Teamhome
