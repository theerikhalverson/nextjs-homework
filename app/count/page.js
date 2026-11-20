import Counter from '../components/Counter';

export default function CountPage() {
    return (
        <div>
            <Counter amount={1} color="lightblue" />
            <Counter amount={2} color="lightgreen" />
        </div>
    );
}
