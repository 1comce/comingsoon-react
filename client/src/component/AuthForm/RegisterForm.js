import React from 'react';
import { useRef, useState, useEffect } from 'react';
export default function RegisterForm() {
    return (
        <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
            <form>
                <div className="text-center mb-3">
                    <p className="dark-theme">Sign up:</p>
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label dark-theme font-15px" htmlFor="registerName">
                        Name
                    </label>
                    <input type="text" id="registerName" className="form-control font-15px border-dark rounded" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label dark-theme font-15px" htmlFor="registerUsername">
                        Username
                    </label>
                    <input type="text" id="registerUsername" className="form-control font-15px border-dark rounded" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label dark-theme font-15px" htmlFor="registerEmail">
                        Email
                    </label>
                    <input type="email" id="registerEmail" className="form-control font-15px border-dark rounded" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label dark-theme font-15px" htmlFor="registerPassword">
                        Password
                    </label>
                    <input
                        type="password"
                        id="registerPassword"
                        className="form-control font-15px border-dark rounded"
                    />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label dark-theme font-15px" htmlFor="registerRepeatPassword">
                        Repeat password
                    </label>
                    <input
                        type="password"
                        id="registerRepeatPassword"
                        className="form-control font-15px border-dark rounded"
                    />
                </div>
                <div className="form-check d-flex justify-content-center mb-4">
                    <input
                        className="form-check-input me-2 font-15px border-dark rounded"
                        type="checkbox"
                        value=""
                        id="registerCheck"
                        aria-describedby="registerCheckHelpText"
                    />
                    <label className="form-check-label dark-theme font-15px" htmlFor="registerCheck">
                        I have read and agree to the terms
                    </label>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-3 font-15px">
                    Sign up
                </button>
            </form>
        </div>
    );
}
