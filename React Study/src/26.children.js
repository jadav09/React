function Children1({children})
{
    return(
        <>
        {children}
        </>
    )
}

export default Children1;

// children props ko app.js main call nahi karna padega.wo direct access karlega.
// children1 fun ko call kiya uske child main kuch bhi likha hoga vo direct access krega.(without props value pass)
