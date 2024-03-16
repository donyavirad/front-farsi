import Container from "../UI/container";

const Footer = () => {
    return (
        <footer>
            <div className="py-4 shadow-top">
                <Container>
                    <div>
                        <p>
                            تمامی حقوق محفوظ است. <span className="text-slate-500">فرانت به فارسی</span>
                        </p>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
