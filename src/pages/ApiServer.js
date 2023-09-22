import React from 'react';
import axios from 'axios';

axios
    .get("https://api.yelp.com/v3/businesses/search", config)
    .then((response) => {
      console.log(response);
    });

const config = {
    headers: {
      Authorization:
        "Bearer {s0p3w33Yx6lqi7_zLY7TLStlV1p5_6EGlc226RQRN1Ag_Md2IkyhfgKNa7F2W3H2NBrNsfLmnZ5B2YFa7NlQrVKXzX3NMUjOZnHw6F5nw_GHHn3CJl-6Jp9x1sysZHYx}",
    },
    params: {
      term: "",
      location: "",
      radius: 1609,
      sort_by: "relevance",
      limit: 50,
    },

   
  };
  
  

export default ServerApi