const Signin = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "ALeKk02G0qQyeFUIPxUx1xiaaCNsi_e2Yew",
        user: {
          name: "Felipe Cipolato",
          email: "f.cipolato@gmail.com",
        },
      });
    }, 2000);
  });
};

export default Signin;
