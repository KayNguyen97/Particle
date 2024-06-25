// ==UserScript==
// @name         Particle Wallet
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  try to take over the world!
// @author       You
// @match        https://wallet.particle.network/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=particle.network
// @grant        none
// ==/UserScript==

// CONFIG
const TARGET_ADDRESS = '0x4454a1a0dc28aEce787D58e3952aa2069EFeE9d7'; //0x00000
const TARGET_VALUE = '0.0001';

// OPTION
const WAITING_TIME = 5000 // 5 sec, waiting time to trigger another transaction
const LOADING_ELEMENT = 500 // 0.5 sec,
const SENDING_STALE_TIME = 15 // 15 sec, checking stale time after sending
var staleTimeout;

var mining_start = false;
var last_state = null;
var last_state_date = new Date();

// element
const body = document.querySelector("body");
const send_to = () => { return document.querySelector('#send_to') };
const send_amount = () => { return document.getElementById('send_amount') };
const btn_send = () => { return document.querySelector('#send > div.ant-form-item.form-footer button') };
const popup_action_send = () => { return document.querySelector('.ant-drawer-body div.bootom-action button'); }
const popup_title_trx = () => { return document.querySelector('.ant-drawer-body .transaction-result-container .title') }
const popup_close_trx = () => { return document.querySelector('.ant-drawer-header .ant-drawer-extra span') }
const popup_mask = () => { return document.querySelector('.ant-drawer .ant-drawer-mask') }
const btn_send_from_home = () => { return document.querySelector('.wallet-info-content .operate-content span.micon') };

const bodyClassList = () => { return Array.from(body.classList) };
const sendPage = () => {
    let classList = bodyClassList();
    return classList.includes('_page_send');
};
const popup = () => {
    let classList = bodyClassList();
    return classList.includes('ant-scrolling-effect');
}
const popup_title = () => { return popup_title_trx()?.innerText || false }



function setState(name = null) {
    last_state = name;
    console.log(`state: ${name}`);
    last_state_date = new Date();
}

function isStale() {
    let check_state_time = (new Date() - last_state_date) / 1000;
    if (check_state_time < SENDING_STALE_TIME) return false;
    return true;
}



const mockInput = (element, value) => {
    let input = element;
    let lastValue = input.value;
    input.value = value;
    let event = new Event('input', { bubbles: true });
    event.simulated = true;
    let tracker = input._valueTracker;
    if (tracker) {
        tracker.setValue(lastValue);
        //console.log('has tracker');
    }
    input.dispatchEvent(event);
};

const classWatcher = (element, callback) => {
    const observer = new MutationObserver((ev) => {
        if (typeof callback === 'function') callback();
    });

    observer.observe(element, {
        attributes: true,
    });
    return observer;
};

const bodyCallback = () => {
    if (!mining_start) return;

    let state_send = sendPage();
    let state_popup = popup();

    setTimeout(function () {
        switch (true) {
            case (state_send && !state_popup):
                setState('input_send');
                let s = send_to();
                let a = send_amount();
                mockInput(s, TARGET_ADDRESS);
                mockInput(a, TARGET_VALUE);

                let bs = btn_send();
                bs.click();
                break;
            // send
            case (state_popup && !popup_title()):
                setState('sending');
                setTimeout(() => {
                    let b = popup_action_send();
                    console.log(b);
                    b.click();
                }, LOADING_ELEMENT);
                break;

            case (state_popup && (popup_title() == 'Transaction')):
                setState('trx_success');
                let m = popup_mask();
                m.click();
                break;

            //home
            default:
                setState('home');
                setTimeout(function () {
                    let b = btn_send_from_home();
                    b.click();
                }, WAITING_TIME)
                break;
        }
        console.log(`state: ${last_state}`);

    }, LOADING_ELEMENT);

};

function listenStale() {
    setTimeout(function () {
        console.log('listenStale');
        if (isStale()) {
            console.log('stale ‼️‼️');
            let back = document.querySelector('.back-btn');
            if (back) back.click();
            let mask = popup_mask();
            if (mask) mask.click();
        }
        listenStale();
    }, 1000);
};

const createStartButton = () => {
    const btn = document.createElement("button");
    btn.innerHTML = 'Start Bot';
    btn.id = 'start-bot';
    btn.classList.add('ant-btn', 'css-var-rab', 'ant-btn-dangerous');
    btn.style.position = 'fixed'
    btn.style.bottom = '10px';
    btn.style.left = '10px';

    btn.addEventListener('click', function () {
        mining_start = !mining_start;
        let str = 'Start Bot';
        if (mining_start) {
            str = 'Stop Bot';
        }

        this.innerHTML = str;
        console.log(`mining_start, ${mining_start}`);
        let b = btn_send_from_home();
        b.click();
        listenStale();
    });
    body.append(btn);
};


(function () {
    'use strict';
    console.log('wallet detected');
    createStartButton();

    classWatcher(body, () => { bodyCallback() });
})();


