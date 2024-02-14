import Card from "../UI/card";
import Container from "../UI/container";

export default function LastArticles () {
    return (
        <div className="mb-8">
            <Container>
                <div>
                    <h2 className="text-2xl mb-4">آخرین مقالات</h2>
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-4">
                        <Card/>
                    </div>
                </div>
            </Container>
        </div>
    )
}