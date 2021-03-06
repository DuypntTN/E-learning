import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetUserInfo } from '../../Services/Admin/GetInfoUser'
import AdminCarousel from './AdminCarousel'
import { AdminPage, BtnInfos, Pannel, Select } from './style'

export default function Admin() {

    const dispatch = useDispatch()
    const [authUser, setAuthUser] = useState("")
    const handleChange = (e) => {
        console.log(e.target.value);
        setAuthUser({ ...authUser, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(authUser)
        dispatch(GetUserInfo(authUser))
    }
    const userInfor = useSelector(state => state.AdminReducer.userInfo) || "";
    const enrollCoures = userInfor.chiTietKhoaHocGhiDanh;
    if (enrollCoures) {
        var num = 1;
        enrollCoures.forEach(item => {
            item.id = num++;
        })
    }

    console.log("enroll coures", enrollCoures);
    return (
        <AdminPage>
            <Select.OptionContainer>
                <Pannel>
                    <Select.Title
                        uppercase
                        color="#707070"
                        size="30"
                        className="title-panel">
                        user control panel
                    </Select.Title>
                    <Select.OptionContainer>
                        <Select.Option selected={true}>
                            User
                        </Select.Option>
                        <Select.Option>
                            Add a new user
                        </Select.Option>
                        <Select.Option>
                            update user
                        </Select.Option>
                        <Select.Option>
                            delete user
                        </Select.Option>

                    </Select.OptionContainer>
                    <Select.ResContainer>
                        <form className="getInfo" onSubmit={event => handleSubmit(event)}>
                            <Select.Input
                                placeholder="T??i kho???n"
                                className="taiKhoan"
                                name="taiKhoan"
                                onChange={e => handleChange(e)}
                            >
                            </Select.Input>
                            <Select.Input
                                placeholder="M???t kh???u"
                                name="matKhau"
                                className="matKhau"
                                type="password"
                                onChange={e => handleChange(e)}
                            >
                            </Select.Input>
                            <BtnInfos >L???y th??ng tin</BtnInfos>
                        </form>
                        <Select.ResTitle uppercase>
                            Kh??a h???c ???? ghi danh
                        </Select.ResTitle>
                        <Select.ResCarousel>
                            <AdminCarousel courseList={enrollCoures}></AdminCarousel>
                        </Select.ResCarousel>
                        <Select.ResCate>

                            <Select.ResItem>
                                <Select.ResTitle uppercase>
                                    T??i kho???n & m???t kh???u
                                </Select.ResTitle>
                                <Select.ResTitle>
                                    T??i kho???n
                                </Select.ResTitle>
                                <Select.Res>
                                    {authUser.taiKhoan || "Kh??ng c?? t??i kho???n"}
                                </Select.Res>
                                <Select.ResTitle>
                                    M???t Kh???u
                                </Select.ResTitle>
                                <Select.Res>
                                    {authUser.matKhau || "Kh??ng c?? m???t kh???u"}
                                </Select.Res>
                                <Select.ResTitle>
                                    M?? Nh??m
                                </Select.ResTitle>
                                <Select.Res>
                                    {userInfor.maNhom || "Kh??ng c?? m?? nh??m"}
                                </Select.Res>
                                <Select.ResTitle>
                                    M?? lo???i ng?????i d??ng
                                </Select.ResTitle>
                                <Select.Res>
                                    {userInfor.maLoaiNguoiDung || "Kh??ng c?? m?? lo???i ng?????i d??ng"}
                                </Select.Res>
                            </Select.ResItem>
                            <Select.ResItem>
                                <Select.ResTitle uppercase>
                                    Th??ng tin
                                </Select.ResTitle>
                                <Select.ResTitle>
                                    H??? t??n
                                </Select.ResTitle>
                                <Select.Res>
                                    {userInfor.hoTen || "Kh??ng c?? h??? t??n"}
                                </Select.Res>
                                <Select.ResTitle>
                                    S??? ??i???n tho???i
                                </Select.ResTitle>
                                <Select.Res>
                                    {userInfor.soDT || "Kh??ng c?? s??? ??i???n tho???i"}
                                </Select.Res>
                                <Select.ResTitle>
                                    Email
                                </Select.ResTitle>
                                <Select.Res>
                                    {userInfor.email || "Kh??ng c?? email"}
                                </Select.Res>
                            </Select.ResItem>
                        </Select.ResCate>
                    </Select.ResContainer>
                </Pannel>

            </Select.OptionContainer>
        </AdminPage>
    )
}
