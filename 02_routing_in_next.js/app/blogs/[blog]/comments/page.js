const CommentsPage = async ({ params }) => {
    const { blog } = await params;

    return (
        <div>
            <h1>Comments for Blog {blog}</h1>
            {/* Comments will be listed here */}
        </div>
    );
};

export default CommentsPage;