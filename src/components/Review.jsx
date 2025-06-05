import React, { useState } from 'react';

const Review = ({ onAddReview }) => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [rating, setRating] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!author.trim() || !text.trim()) return;
        const newReview = {
            author,
            text,
            rating,
            date: new Date().toLocaleDateString(),
        };
        if (onAddReview) onAddReview(newReview);
        setAuthor('');
        setText('');
        setRating(5);
    };

    return (
        <form onSubmit={handleSubmit} className="review-form">
            <h3>Aggiungi una recensione</h3>
            <div>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Recensione:
                    <textarea
                        value={text}
                        onChange={e => setText(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Voto:
                    <select
                        value={rating}
                        onChange={e => setRating(Number(e.target.value))}
                    >
                        {[1,2,3,4,5].map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </label>
            </div>
            <button type="submit">Invia</button>
        </form>
    );
};

export default Review;