import React, { useState, createContext, useContext } from 'react';
import { ToastContainer,toast } from 'react-toastify';


const Notificacion = () => {

    const styleNotification = (text) => {
        toast.info(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: "bounce",
        });
    };

    return (
        <article style={{styleNotification}}>
            <h3>success</h3>
            esto es una notificacion.
            <ToastContainer/>
        </article>
    )
};

// -----
const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState({
        type:'success',
        text:'notificacion'
    });

    const showNotification = (type, text) => {
        setNotificationData({ type, text });
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            <Notificacion notificationData={notificationData}/>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () =>{
    return useContext(NotificationContext)
}
