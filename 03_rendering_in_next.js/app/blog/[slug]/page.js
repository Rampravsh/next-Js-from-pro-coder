export default async function Page({ params }) {
    const { slug } = params;
    return (
        <div>
            <h1>Blog Post: {slug}</h1>
        </div>
    );
}