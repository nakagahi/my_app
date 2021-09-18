import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";

import TextField from '@mui/material/TextField';
import { Button } from "@material-ui/core";
import '../css/profile.css'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

interface iProfileType {
    isProfileNull: boolean;
}


const Profile = (props: iProfileType) => {

    const { isProfileNull } = props;

    const {register, handleSubmit} = useFormContext();

    const [birthDay, setBirthDay] = useState<Date | null>(
        new Date(1993, 9, 22),
      );
    
    const handleChange = (newValue: Date | null) => {
        setBirthDay(newValue);
    };

    function formatDate(dt: Date) {
        var y = dt.getFullYear();
        var m = ('00' + (dt.getMonth()+1)).slice(-2);
        var d = ('00' + dt.getDate()).slice(-2);
        return (y + m + d);
    }

    const genPostdata = (data: { [x: string]: any}) => {
        const postDate = {...data, "birthDay": birthDay ? formatDate(birthDay) : null}
    }

    var calcAge = function(birthdayStr: string){
        if(birthdayStr.length !== 8){
          return -1;
        }
        var d = new Date();
        var dStr = ''+d.getFullYear()+('0'+(d.getMonth()+1)).slice(-2)+('0'+d.getDate()).slice(-2);
        return Math.floor((parseInt(dStr)-parseInt(birthdayStr))/10000);
      };

    console.log('isProfileNullDisp', isProfileNull)
    return(
        <div className={isProfileNull ? "profileDivNone" : "profileDiv"}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <form onSubmit={handleSubmit(genPostdata)}>
                    <div className="profile">
                            <TextField id="outlined-required" className="nameField" color="primary" label="氏" name="firstName" inputRef={register} />
                            <TextField id="outlined-required" className="nameField" color="primary" label="名" name="lastName" inputRef={register} /><br/>
                            <TextField id="outlined-required" className="nameField" color="primary" label="氏(ふりがな)" name="kanaFirstName" inputRef={register} />
                            <TextField id="outlined-required" className="nameField" color="primary" label="名(ふりがな)" name="kanaLastName" inputRef={register} /><br/>
                            <DesktopDatePicker
                            label="生年月日"
                            inputFormat="yyyy/MM/dd"
                            value={birthDay}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                            /><br/>
                            <TextField id="outlined-required" className="ageField" color="primary" label="年齢" name="age" value={calcAge(formatDate(birthDay ? birthDay : new Date()))} inputRef={register} /><br/>
                            <Button type="submit" className="buttonField" variant="contained">送信</Button>
                    </div>
                </form>
            </LocalizationProvider>
        </div>
    )
}

export default Profile;