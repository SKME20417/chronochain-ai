import { NextRequest, NextResponse } from "next/server";

/**
 * ChronoChain.AI – Forecasting API (Mock)
 * --------------------------------------
 * This API simulates the forecasting engine used by ChronoChain.AI.
 * It accepts historical demand data and returns multi-frequency
 * forecasts along with metadata required by the Agentic AI layer.
 */

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const {
            sku,
            location,
            frequency = "weekly",
            historical_demand
        } = body;

        if (!historical_demand || !Array.isArray(historical_demand)) {
            return NextResponse.json(
                { error: "historical_demand must be an array" },
                { status: 400 }
            );
        }

        // --- Simple forecasting logic (mock) ---
        const avgDemand =
            historical_demand.reduce((s, v) => s + Number(v), 0) /
            historical_demand.length;

        const horizon = frequency === "daily" ? 7 : frequency === "weekly" ? 4 : 3;

        const forecast = Array.from({ length: horizon }).map((_, i) => ({
            period: i + 1,
            forecast_units: Math.round(avgDemand * (1 + Math.random() * 0.1)),
            confidence: 0.85
        }));

        // --- Agentic metadata ---
        const agentSignals = {
            demand_trend:
                forecast[forecast.length - 1].forecast_units > avgDemand
                    ? "increasing"
                    : "stable",
            risk_level: avgDemand > 500 ? "medium" : "low",
            recommendation:
                avgDemand > 500
                    ? "Increase replenishment frequency"
                    : "Maintain current inventory strategy"
        };

        return NextResponse.json({
            sku,
            location,
            frequency,
            forecast_horizon: horizon,
            forecast,
            agentSignals,
            generated_at: new Date().toISOString()
        });
    } catch (error) {
        return NextResponse.json(
            { error: "Invalid request payload" },
            { status: 500 }
        );
    }
}

/**
 * Optional GET for health check / demo
 */
export async function GET() {
    return NextResponse.json({
        status: "ChronoChain.AI Forecast API is running",
        supported_frequencies: ["daily", "weekly", "monthly"]
    });
}
