import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import{ Checkbox,Select,InputLabel,FormControl} from '@material-ui/core';

 const initialstate={
     username:"",
     email:"",
     password:"",
     city:"",
     game:[],
 }

  












const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    },
  }));
  
 
  

const Form = () => {
   const classes=useStyles();
   const[data,setData]=useState(initialstate);

  
    const handleChange=(e)=>{
     
      
      if(e.target.type=="checkbox"){
        const {game}=data
        const{value,checked}=e.target;
        
        if (checked) {
        
          setData({...data,
            game: [...game, value]
          
          });
        } else {
         
          setData({...data,
            game: game.filter((e) => e !== value)
            
          });
        }
      }else{
      const{name,value}=e.target;
      setData({...data,[name]:value})
      }
     





    }





   console.log(data,"data")





  return (
    <form className={classes.root}>
  
    <TextField id="standard-basic" label="Name" type="text" onChange={handleChange} name="username" />
    <TextField id="standard-basic" label="Email" type="email" onChange={handleChange} name="email" />
    <TextField id="standard-basic" label="Password" type="password" onChange={handleChange} name="password" />

 <FormControl className={classes.formControl}>
<InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
         // id="demo-simple-select"
          name="city"
          onChange={handleChange}
        >
          <MenuItem value="Bihar">Bihar</MenuItem>
          <MenuItem value="Bangaluru">Bangaluru</MenuItem>
          <MenuItem value="Maharashtra">Maharashtra</MenuItem>
          <MenuItem value="Jaipur">Jaipur</MenuItem>
          <MenuItem value="Pune">Pune</MenuItem>
        </Select>

</FormControl>







<FormGroup row>
   choose Your game
      <FormControlLabel 
      control={<Checkbox  onChange={handleChange} name="game" value="hockey" />}
        label="Hockey"
      />
      <FormControlLabel 
      control={<Checkbox  onChange={handleChange} name="game" value="cricket" />}
        label="cricket"
      />
       <FormControlLabel 
      control={<Checkbox  onChange={handleChange} name="game" value="badminton" />}
        label="Badminton"
      />
  <FormControlLabel 
      control={<Checkbox  onChange={handleChange} name="game" value="polo" />}
        label="polo"
      />
  <FormControlLabel 
      control={<Checkbox  onChange={handleChange} name="game" value="tennis" />}
        label="tennis"
      />
    </FormGroup>





      </form>
  )
}

export default Form;