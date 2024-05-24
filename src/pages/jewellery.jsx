
import { JewelleryView } from 'src/sections/jewellery/view';

import { Helmet } from 'react-helmet-async';


// ----------------------------------------------------------------------

export default function JewelleryPage() {
  return (
    <>
          <Helmet>
        <title> JEW </title>
      </Helmet>
     
      <JewelleryView/>
    </>
  );
}