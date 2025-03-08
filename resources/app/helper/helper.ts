import moment from 'moment';
import CryptoJS  from 'crypto-js';
let secretKey = "your_secret_key";

interface AppInfo {
    created_at: string; // Assuming created_at is a string (in ISO format or timestamp)
}
const encryptData = (data:Record<string, any>)=>{
    let originalData = data;
    let encryptedData = CryptoJS.AES.encrypt(originalData, secretKey).toString();
    return encryptedData;
}
const decryptData = (data:Record<string, any>)=>{
    let storedEncryptedData = data;
    let decryptedData = CryptoJS.AES.decrypt(storedEncryptedData, secretKey).toString(CryptoJS.enc.Utf8);
    return decryptedData;
}

const checkAuth = ()=>{
    return true;
    
    // try {
    //     let data = localStorage.getItem('app_info');
    //     if (data !== null) {
           
    //         data = decryptData(data);
    //         data = JSON.parse(data);
    //         const currentTime = moment();
    //         const parsedData: AppInfo = JSON.parse(data ?? ''); // Ensure correct typing
    //         const created_at = moment(parsedData.created_at);
    //         const minutes = currentTime.diff(created_at, 'minutes');
    //         if(minutes < 60){
    //             return true;
    //         }else{
    //             logout();
    //             return false;
    //         }
    //     }else{
    //         logout();
    //         return false;
    //     }
    // } catch (error) {
    //     return false;
    // }
}

const getToken = () =>{
    // try {
    //     let data = localStorage.getItem('app_info');
    //     data = decryptData(data);
    //     data = JSON.parse(data);
    //     if(data){
    //         return data.token;
    //     }else{
    //         return null;
    //     }
    // } catch (error) {
    //     return null;
    // }
 
}

const getPermissions = ()=>{
    // try {
    //     let data = localStorage.getItem('app_info');
    //     data = decryptData(data);
    //     data = JSON.parse(data);
    //     if(data){
    //         return data.permissions;
    //     }else{
    //         return [];
    //     }
    // } catch (error) {
    //     return [];
    // }
}

const can = (permission:Record<string, any>)=>{
    // const permissions = getPermissions();
    // if(permissions.includes(permission)){
    //     return true;
    // }else{
    //     return false;
    // }
}
const userInfo = ()=>{
    // try {
    //     let data = localStorage.getItem('app_info');
    //     data = decryptData(data);
    //     data = JSON.parse(data);  
    //     if(data) {
    //         return data.user;
    //     }
    //     return data;
    // } catch (error) {
    //     return {};
    // }
}

const logout = ()=>{
    localStorage.setItem('app_info', '');
}

const loadTree = ()=> {
    // $(document).ready(function(){
    //     $('[data-widget="treeview"]').each(function () {
    //         if ($(this).data('treeview-init') === undefined) {
    //             $(this).Treeview('init');
    //             $(this).data('treeview-init', true);
    //         }
    //     });
    // });
}

export {encryptData, decryptData, checkAuth, userInfo, getToken, can, logout, loadTree}