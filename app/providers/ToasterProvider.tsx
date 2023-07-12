/**
 * Toaster is using useEffect so, we need at least one component that is 'use client' wrapping around the Toaster to use it. --> It is the reason we need ToasterProvider to wrap it.
 */

'use client';

import { Toaster } from 'react-hot-toast';

const ToasterProvider = () => {
    
    return (<Toaster />);
}

export default ToasterProvider;