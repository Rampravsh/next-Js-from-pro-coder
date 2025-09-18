const CommentPage = async ({ params }) => {
    const { blog, comment } = await params;

    return (
        <div>
            <h1>Comment {comment} for Blog {blog}</h1>
        </div>
    );
};

export default CommentPage;
