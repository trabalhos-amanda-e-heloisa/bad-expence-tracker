import { computed, ref } from 'vue';

const expenses = ref([
    { id: 1, title: 'Cafe', value: 6, category: 'food' },
    { id: 2, title: 'Onibus', value: 4.5, category: 'transport' },
    { id: 3, title: 'Lanche', value: 12, category: 'food' },
]);

const title = ref('');
const value = ref('');
const category = ref('');
const filter = ref('all');

const titleError = ref('');
const valueError = ref('');
const messageClearAll = ref('');
const messageSuccess = ref('');
const showConfirmClear = ref(false)

export function useExpenses() {

    const filtered = computed(() => {
        if (filter.value === 'all') {
            return expenses.value;
        }
        return expenses.value.filter((item) => item.category.toLowerCase() === filter.value.toLowerCase());
    });

    const total = computed(() => {
        return expenses.value.reduce((sum, item) => sum + Number(item.value || 0), 0);
    });

    function formatText(text) {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    function addExpense() {
        titleError.value = '';
        valueError.value = '';

        if (!title.value.trim()) {
            titleError.value = 'Digite uma descrição';
        }

        if (!value.value.trim() || Number(value.value) <= 0) {
            valueError.value = 'Digite um valor válido';
        }

        if (titleError.value || valueError.value) {
            return false;
        }

        expenses.value.push({
            id: Date.now(),
            title: formatText(title.value),
            value: value.value,
            category: formatText(category.value || 'other'),
        });

        messageSuccess.value = 'Despesa cadastrada com sucesso!';

        setTimeout(() => {
            messageSuccess.value = '';
        }, 3000);

        clearAllForms();

        return true;
    }

    function removeExpense(id) {
        expenses.value = expenses.value.filter((item) => item.id !== id);
    }

    function clearAll() {
        showConfirmClear.value = true
    }

    function confirmClearAll() {
        expenses.value = []
        showConfirmClear.value = false
        messageClearAll.value = 'Todas as despesas foram removidas!'

        setTimeout(() => {
            messageClearAll.value = ''
        }, 3000)
    }

    function cancelClearAll() {
        showConfirmClear.value = false
    }

    function clearAllForms() {
        title.value = '';
        value.value = '';
        category.value = '';

        titleError.value = '';
        valueError.value = '';
    }

    return {
        expenses,
        title,
        value,
        category,
        filter,
        addExpense,
        removeExpense,
        clearAll,
        confirmClearAll,
        cancelClearAll,
        showConfirmClear,
        clearAllForms,
        filtered,
        total,
        titleError,
        valueError,
        messageClearAll,
        messageSuccess
    };
}