cpu_frequencies = [
    16_000_000,
    8_000_000,
    4_000_000
]

for F_CPU in cpu_frequencies:

    print("\n")
    print("=" * 70)
    print(f"F_CPU = {F_CPU/1_000_000:.0f} MHz")
    print("=" * 70)

    print(
        f"{'UBRR':>6} | "
        f"{'Sync':>12} | "
        f"{'Async U2X':>12} | "
        f"{'Async Normal':>12}"
    )

    print("-" * 55)

    for ubrr in range(101):

        sync_baud = F_CPU / (2 * (ubrr + 1))
        async_u2x_baud = F_CPU / (8 * (ubrr + 1))
        async_normal_baud = F_CPU / (16 * (ubrr + 1))

        print(
            f"{ubrr:6d} | "
            f"{sync_baud:12.2f} | "
            f"{async_u2x_baud:12.2f} | "
            f"{async_normal_baud:12.2f}"
        )