import React, { useState } from "react";
function Changetab() {
  const [show, setShow] = useState(true);
  if (show === true) {
    show = !show;
  } else {
    !show;
  }
}
/* export default Changetab(); */
