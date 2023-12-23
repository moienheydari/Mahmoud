import React, { useEffect, useState } from 'react';
import '../css/SignupField.css';

export default function SignupField() {
    const [form, setForm] = useState({
        feranshiz: 100,
        ekhtelaf: '',
        ekhtelafghal1: '',
        ekhtelafghal2: '',
        ekhtelafghal3: '',
        ekhtelafghal4: '',
        kharej1: '',
        kharej2: '',
        kharej3: '',
        kharej4: '',
        sahm: ''
    });
    const [sum, setSum] = useState('--');
    const [hide, setHide] = useState({
        ekht2: true,
        ekht3: true,
        ekht4: true,
        kha2: true,
        kha3: true,
        kha4: true
    });

    useEffect(() => {
        (form.ekhtelafghal1 !== '') ? setHide(prev => { return { ...prev, ekht2: false } }) : setHide(prev => { return { ...prev, ekht2: true } });
        (form.ekhtelafghal2 !== '') ? setHide(prev => { return { ...prev, ekht3: false } }) : setHide(prev => { return { ...prev, ekht3: true } });
        (form.ekhtelafghal3 !== '') ? setHide(prev => { return { ...prev, ekht4: false } }) : setHide(prev => { return { ...prev, ekht4: true } });
        (form.kharej1 !== '') ? setHide(prev => { return { ...prev, kha2: false } }) : setHide(prev => { return { ...prev, kha2: true } });
        (form.kharej2 !== '') ? setHide(prev => { return { ...prev, kha3: false } }) : setHide(prev => { return { ...prev, kha3: true } });
        (form.kharej3 !== '') ? setHide(prev => { return { ...prev, kha4: false } }) : setHide(prev => { return { ...prev, kha4: true } });
    }, [form]);

    let conveter = () => {
        setForm((prev) => {
            let keyArr = Object.keys(prev);
            keyArr.forEach(i => {
                if (prev[i] == '') { prev[i] = 0 }
                isNaN(Number(prev[i]))
                if (isNaN(Number(prev[i]))) {
                    alert('فقط عدد میتوانید وارد کنید');
                    reset();
                }
            });
            return prev;
        });
    }

    let reset = () => {
        setForm({
            feranshiz: 100,
            ekhtelaf: '',
            ekhtelafghal1: '',
            ekhtelafghal2: '',
            ekhtelafghal3: '',
            ekhtelafghal4: '',
            kharej1: '',
            kharej2: '',
            kharej3: '',
            kharej4: '',
            sahm: ''
        });
    }

    const handleOptionChange = (event) => {
        setForm((prev) => {
            return {
                ...prev,
                feranshiz: event.target.value
            };
        });
    };

    let handleClick = () => {
        conveter();
        let num = Number(form.sahm);
        let zarib = (100 - Number(form.feranshiz)) / 100;
        let jam = Number(form.ekhtelaf) - (Number(form.ekhtelafghal1) + Number(form.ekhtelafghal2) + Number(form.ekhtelafghal3) + Number(form.ekhtelafghal4) + Number(form.kharej1) + Number(form.kharej2) + Number(form.kharej3) + Number(form.kharej4));
        let final = num + (zarib * jam);
        copyToClipboard(final);
        setSum(final);
        reset();
    }

    const copyToClipboard = (value) => {
        const textArea = document.createElement('textarea');
        textArea.value = value;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    };

    return (
        <div id='signup-field' className='signup-field'>

            <div id='Feranshiz' className='inputCont'>
                <div className='Feran'>
                    <label><input
                        className='radio'
                        type='radio'
                        name='feranshiz'
                        value={5}
                        checked={form.feranshiz == 5}
                        onChange={handleOptionChange}
                    /> 5</label>
                    <label><input
                        className='radio'
                        type='radio'
                        name='feranshiz'
                        value={10}
                        checked={form.feranshiz == 10}
                        onChange={handleOptionChange}
                    /> 10</label>
                    <label><input
                        className='radio'
                        type='radio'
                        name='feranshiz'
                        value={15}
                        checked={form.feranshiz == 15}
                        onChange={handleOptionChange}
                    /> 15</label>
                    <label><input
                        className='radio'
                        type='radio'
                        name='feranshiz'
                        value={20}
                        checked={form.feranshiz == 20}
                        onChange={handleOptionChange}
                    /> 20</label>
                    <p>درصد فرانشیز</p>
                </div>
            </div>

            <div id='Ekht' className='inputCont'>
                <label className='label'>
                    <input
                        className={`inputtext`}
                        value={form.ekhtelaf}
                        placeholder='0'
                        name='ekhtelaf'
                        type='text'
                        onChange={({ target }) => { setForm(prev => { return { ...prev, [target.name]: target.value } }) }}
                    ></input> اختلاف</label>
            </div>

            <div id='Ekht-Ghal' className='inputCont'>
                <label className='label'>
                    <input
                        className={`inputtext`}
                        value={form.ekhtelafghal1}
                        placeholder='0'
                        name='ekhtelafghal1'
                        type='text'
                        onChange={({ target }) => { setForm(prev => { return { ...prev, [target.name]: target.value } }) }}
                    ></input> اختلاف قلم بیمه ای ۱</label>
                <label className={`label ${(hide.ekht2) ? 'hide' : 'show'}`}>
                    <input
                        className={`inputtext`}
                        value={form.ekhtelafghal2}
                        placeholder='0'
                        name='ekhtelafghal2'
                        type='text'
                        onChange={({ target }) => { setForm(prev => { return { ...prev, [target.name]: target.value } }) }}
                    ></input> اختلاف قلم بیمه ای ۲</label>
                <label className={`label ${(hide.ekht3) ? 'hide' : 'show'}`}>
                    <input
                        className={`inputtext`}
                        value={form.ekhtelafghal3}
                        placeholder='0'
                        name='ekhtelafghal3'
                        type='text'
                        onChange={({ target }) => { setForm(prev => { return { ...prev, [target.name]: target.value } }) }}
                    >
                    </input> اختلاف قلم بیمه ای ۳</label>
                <label className={`label ${(hide.ekht4) ? 'hide' : 'show'}`}>
                    <input
                        className={`inputtext`}
                        value={form.ekhtelafghal4}
                        placeholder='0'
                        name='ekhtelafghal4'
                        type='text'
                        onChange={({ target }) => { setForm(prev => { return { ...prev, [target.name]: target.value } }) }}
                    >
                    </input> اختلاف قلم بیمه ای ۴</label>
            </div>

            <div id='Kharej' className='inputCont'>
                <label className='label'>
                    <input
                        className='inputtext'
                        value={form.kharej1}
                        placeholder='0'
                        name='kharej1'
                        type='text'
                        onChange={({ target }) => { setForm(prev => { return { ...prev, [target.name]: target.value } }) }}
                    >
                    </input>قلم خارج از بیمه تکمیلی ۱</label>
                <label className={`label ${(hide.kha2) ? 'hide' : 'show'}`}>
                    <input
                        className={`inputtext`}
                        value={form.kharej2}
                        placeholder='0'
                        name='kharej2'
                        type='text'
                        onChange={({ target }) => { setForm(prev => { return { ...prev, [target.name]: target.value } }) }}
                    >
                    </input>قلم خارج از بیمه تکمیلی ۲</label>
                <label className={`label ${(hide.kha3) ? 'hide' : 'show'}`}>
                    <input
                        className={`inputtext`}
                        value={form.kharej3}
                        placeholder='0'
                        name='kharej3'
                        type='text'
                        onChange={({ target }) => { setForm(prev => { return { ...prev, [target.name]: target.value } }) }}
                    >
                    </input>قلم خارج از بیمه تکمیلی ۳</label>
                <label className={`label ${(hide.kha4) ? 'hide' : 'show'}`}>
                    <input
                        className={`inputtext`}
                        value={form.kharej4}
                        placeholder='0'
                        name='kharej4'
                        type='text'
                        onChange={({ target }) => { setForm(prev => { return { ...prev, [target.name]: target.value } }) }}
                    >
                    </input>قلم خارج از بیمه تکمیلی ۴</label>
            </div>

            <div id='Sahm' className='inputCont'>
                <label className='label'>
                    <input
                        className={`inputtext`}
                        value={form.sahm}
                        placeholder='0'
                        name='sahm'
                        type='text'
                        onKeyDown={handleKeyPress}
                        onChange={({ target }) => { setForm(prev => { return { ...prev, [target.name]: target.value } }) }}
                    >
                    </input>سهم</label>
            </div>

            <button onClick={handleClick}>محاسبه</button>

            <p className='sum'>{sum}</p>
        </div>
    )
}