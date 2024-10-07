
import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper";
import NewPasswordForm from "../../ui/NewPasswordForm";


export default async function Recover({ params }: { params: { id: string } }) {
    const id = params.id as string;
    return (
        <MaxWidthWrapper>
            <NewPasswordForm user_id={id}/>
        </MaxWidthWrapper>
    );
}