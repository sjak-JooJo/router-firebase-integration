import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth';


const auth = getAuth(app);

const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>Knock Knock ! Who is there</h2>
            <h5>{user? user.displayName : 'voooooooooooooot'}</h5>
        </div>
    );
};

export default Products;