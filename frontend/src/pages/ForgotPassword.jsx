import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Shield, Mail, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ForgotPassword() {
    const { resetPassword } = useAuth();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setMessage("");
            setError("");
            setLoading(true);
            await resetPassword(email);
            setMessage("If this email exists, a reset link has been sent to it.");
        } catch (err) {
            // Security best practice: Don't reveal if email exists or not
            // Firebase throws 'auth/user-not-found' if it doesn't exist, but we show the same message.
            setMessage("If this email exists, a reset link has been sent to it.");
        }
        setLoading(false);
    }

    return (
        <div className="min-h-screen bg-surface flex items-center justify-center px-4 pt-16">
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none" />
            <div className="relative w-full max-w-md">
                <div className="bg-surface-elevated border border-surface-border rounded-2xl p-8 shadow-card">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/30 rounded-2xl mb-4">
                            <Shield className="w-7 h-7 text-primary" />
                        </div>
                        <h1 className="font-display text-3xl tracking-wider text-text-primary">
                            RESET <span className="text-primary">PASSWORD</span>
                        </h1>
                        <p className="font-body text-sm text-text-secondary mt-2">
                            Enter your official email to receive a reset link
                        </p>
                    </div>

                    {error && (
                        <div className="bg-accent/10 border border-accent/30 text-accent rounded-lg px-4 py-3 font-body text-sm mb-6">
                            {error}
                        </div>
                    )}

                    {message && (
                        <div className="flex items-start gap-3 bg-primary/10 border border-primary/30 text-primary rounded-lg px-4 py-3 font-body text-sm mb-6">
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <p>{message}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block font-body text-xs text-text-secondary uppercase tracking-wider mb-1.5">
                                Official Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted w-4 h-4" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="officer@police.gov.in"
                                    required
                                    className="w-full bg-surface border border-surface-border rounded-lg pl-10 pr-4 py-3 font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading || !!message}
                            className="w-full mt-2 px-6 py-3.5 bg-primary text-surface font-body font-bold rounded-lg hover:bg-primary-dark transition-all shadow-glow disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send Reset Link"}
                        </button>
                    </form>

                    <div className="text-center mt-6">
                        <Link to="/login" className="inline-flex items-center gap-2 font-body text-sm text-text-muted hover:text-primary transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
