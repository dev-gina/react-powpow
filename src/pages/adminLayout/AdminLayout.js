
import React from 'react';
import {Outlet} from "react-router-dom";
import S from "./style";
import AdminHeader from './AdminHeader';

const AdminLayout = () => {
    return (
        <S.LayoutWrapper> 
            <AdminHeader />
            <S.Main>
                <Outlet />
            </S.Main>
        </S.LayoutWrapper>
    );
};

export default AdminLayout;


