import React, { useEffect } from "react";
import {
    CalendarDays,
    Clock3,
    X
} from "lucide-react";

    export default function BlogModal({
    post,
    onClose
    }) {
    useEffect(() => {
        if (!post) return;

        document.body.style.overflow = "hidden";

        function closeWithEscape(event) {
        if (event.key === "Escape") {
            onClose();
        }
        }

        window.addEventListener(
        "keydown",
        closeWithEscape
        );

        return () => {
        document.body.style.overflow = "";

        window.removeEventListener(
            "keydown",
            closeWithEscape
        );
        };
    }, [post, onClose]);

    if (!post) {
        return null;
    }

    function closeFromBackground(event) {
        if (event.target === event.currentTarget) {
        onClose();
        }
    }

    return (
        <div
        className="blog-modal-overlay"
        onClick={closeFromBackground}
        role="presentation"
        >
        <article
            className="blog-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="blog-modal-title"
        >
            <button
            type="button"
            className="blog-modal-close"
            onClick={onClose}
            aria-label="Cerrar artículo"
            >
            <X size={23} />
            </button>

            {post.image && (
            <div className="blog-modal-image">
                <img
                src={post.image}
                alt={`Portada del artículo ${post.title}`}
                />
            </div>
            )}

            <div className="blog-modal-content">
            <span className="blog-category">
                {post.category}
            </span>

            <h2 id="blog-modal-title">
                {post.title}
            </h2>

            <div className="blog-modal-meta">
                <span>
                <CalendarDays size={17} />
                {post.date}
                </span>

                <span>
                <Clock3 size={17} />
                {post.readingTime}
                </span>
            </div>

            <div className="blog-tags">
                {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
                ))}
            </div>

            <p className="blog-introduction">
                {post.introduction}
            </p>

            <div className="blog-article-content">
                {post.sections.map((section) => (
                <section key={section.title}>
                    <h3>{section.title}</h3>

                    {section.paragraphs?.map(
                    (paragraph, index) => (
                        <p
                        key={`${section.title}-${index}`}
                        >
                        {paragraph}
                        </p>
                    )
                    )}

                    {section.list && (
                    <ul>
                        {section.list.map((item) => (
                        <li key={item}>{item}</li>
                        ))}
                    </ul>
                    )}
                </section>
                ))}
            </div>

            <div className="blog-conclusion">
                <h3>Conclusión</h3>
                <p>{post.conclusion}</p>
            </div>
            </div>
        </article>
        </div>
    );
}