import React, { useState } from "react";
import {
    ArrowRight,
    BookOpen,
    CalendarDays,
    Clock3
} from "lucide-react";
import { posts } from "../data/posts";
import BlogModal from "./BlogModal";

export default function Blog() {
const [selectedPost, setSelectedPost] = useState(null);

    return (
        <>
        <section className="blog wrap" id="blog">
            <div className="section-title">
            <p className="eyebrow">
                BLOG Y APRENDIZAJES
            </p>

            <h2>
                Experiencias, soluciones y aprendizajes
                durante mi camino como desarrolladora
            </h2>

            <p className="section-description">
                Comparto algunos de los retos que he enfrentado,
                las soluciones que encontré y los conocimientos
                que obtuve durante mis proyectos.
            </p>
            </div>

            <div className="blog-grid">
            {posts.map((post) => (
                <article
                className="blog-card"
                key={post.id}
                >
                <div className="blog-card-image">
                    {post.image ? (
                    <img
                        src={post.image}
                        alt={`Portada del artículo ${post.title}`}
                        loading="lazy"
                    />
                    ) : (
                    <div className="blog-placeholder">
                        <BookOpen size={46} />

                        <span>{post.category}</span>
                    </div>
                    )}
                </div>

                <div className="blog-card-body">
                    <span className="blog-category">
                    {post.category}
                    </span>

                    <h3>{post.title}</h3>

                    <p>{post.excerpt}</p>

                    <div className="blog-meta">
                    <span>
                        <CalendarDays size={16} />
                        {post.date}
                    </span>

                    <span>
                        <Clock3 size={16} />
                        {post.readingTime}
                    </span>
                    </div>

                    <div className="blog-tags">
                    {post.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                    </div>

                    <button
                    type="button"
                    className="blog-read-button"
                    onClick={() => setSelectedPost(post)}
                    >
                    Leer artículo
                    <ArrowRight size={18} />
                    </button>
                </div>
                </article>
            ))}
            </div>
        </section>

        <BlogModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
        />
        </>
    );
}