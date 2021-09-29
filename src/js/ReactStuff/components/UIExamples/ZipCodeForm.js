import React, {useState} from "react";


const ZipCodeForm = () => {
    let [zipCode, setZipCode] = useState('');
    let [city, setCity] = useState('');
    let handleKeyUp = (evt) => {
        let {target} = evt,
            {value} = target;
        setZipCode(value);
    };

    let fetchCity = (zipCode) => {
        if (!zipCode){
            return;
        }
        let pr = new Promise((res, rej) => {
            setTimeout(()=>{
                res({
                    city: 'San Jose',
                    state: 'California'
                });
            }, 5000);
        });
        return pr;
    };

    let searchCity = () => {
      fetchCity(zipCode).then((result) => {
          if (result && result.city){
              setCity(result.city);
          }
      });
    };

    return (
        <div className="App">
            <h1>Hello React!</h1>
            <form>
                <input type="text" name="zipCode" value={zipCode} onChange={handleKeyUp}/>
                <a href="#" onClick={searchCity}>Search</a>
                <p>Searched city is: {city}</p>
            </form>
        </div>
    );
};

export default ZipCodeForm;
