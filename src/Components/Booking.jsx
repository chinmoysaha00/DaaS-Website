import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import axios from 'axios';

export default function Booking({ handleClose, handleClickOpen }) {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [formErrors, setFormErrors] = useState({
        name: false,
        contact: false,
        email: false,
    });

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleFormSend = (e) => {
        if (!name || !contact || !email || !validateEmail(email)) {
            setFormErrors({
                name: !name,
                contact: !contact,
                email: !email || !validateEmail(email),
            });
            return;
        }
        e.preventDefault();
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzvpI6xET9Ht-yukUEJZ6PcVPWE0JFI0EL6tCIvMwS1Q41q3RilxTnArQWr_XWmua80tA/exec';
        axios.post(scriptURL, { name, email, contact })
            .then(response => {
                console.log('Form data sent successfully:', response.data);
            })
            .catch(error => {
                console.error('Error sending form data:', error);
            });

        // alert("Submitted!");

        openCalendly();
    };

    const openCalendly = () => {
        const url = `https://calendly.com/chinmoysaha321/podcast-with-daas?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&a1=${encodeURIComponent(contact)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            <Dialog open={handleClickOpen} onClose={handleClose}>
                <DialogTitle id="form-dialog-title">CONTACT FORM</DialogTitle>
                <DialogContent>
                    <DialogContentText className='fs-6'>
                        NAME
                    </DialogContentText>
                    <TextField
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                        required
                        margin="dense"
                        label="Full Name"
                        type="text"
                        fullWidth
                        error={formErrors.name}
                        helperText={formErrors.name && 'Name is required'}
                    />
                    <DialogContentText>
                        CONTACT
                    </DialogContentText>
                    <TextField
                        onChange={(e) => setContact(e.target.value)}
                        required
                        margin="dense"
                        label="Contact Number"
                        type="tel"
                        fullWidth
                        error={formErrors.contact}
                        helperText={formErrors.contact && 'Contact number is required'}
                    />
                    <DialogContentText>
                        EMAIL
                    </DialogContentText>
                    <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        margin="dense"
                        label="Email address"
                        type="email"
                        fullWidth
                        error={formErrors.email}
                        helperText={formErrors.email ? (validateEmail(email) ? 'Email is required' : 'Invalid email format') : ''}
                    />
                </DialogContent>
                <DialogActions className='mb-2'>
                    <Button className='btnMain' onClick={handleFormSend}>
                        NEXT
                    </Button>
                    <Button className='btnModal mx-3' onClick={handleClose}>
                        CANCEL
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
