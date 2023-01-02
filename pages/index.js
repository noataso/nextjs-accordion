import Link from "next/link";
const index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Link>
                    <p className={styles.title}>accordion</p>
                </Link>
            </div>
        </div>
    );
}

export default index;